"use client";

import { useEffect, useRef } from 'react';

// Kakao Maps API 타입 정의
interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

interface KakaoMap {
  setCenter(latlng: KakaoLatLng): void;
  setLevel(level: number): void;
}

interface KakaoMarker {
  setMap(map: KakaoMap | null): void;
}

interface KakaoInfoWindow {
  open(map: KakaoMap, marker: KakaoMarker): void;
  close(): void;
}

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (container: HTMLElement, options: {
          center: KakaoLatLng;
          level: number;
        }) => KakaoMap;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Marker: new (options: {
          position: KakaoLatLng;
          map: KakaoMap;
        }) => KakaoMarker;
        InfoWindow: new (options: {
          content: string;
        }) => KakaoInfoWindow;
        event: {
          addListener: (target: KakaoMarker, event: string, callback: () => void) => void;
        };
      };
    };
  }
}

interface KakaoMapProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function KakaoMap({ 
  width = "100%", 
  height = "300px", 
  className = "" 
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=0aabc5c8bd086b831ca7d5a43b8d008c&autoload=false`;
    
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          if (mapRef.current) {
            // 병원 위치 좌표 (서울 은평구 진관동 72 드림스퀘어 4층)
            const hospitalPosition = new window.kakao.maps.LatLng(37.6356924, 126.9193269);
            
            // 지도 옵션
            const options = {
              center: hospitalPosition,
              level: 3 // 지도 확대 레벨 (1~14, 숫자가 작을수록 확대)
            };
            
            // 지도 생성
            const map = new window.kakao.maps.Map(mapRef.current, options);
            
            // 마커 생성
            const marker = new window.kakao.maps.Marker({
              position: hospitalPosition,
              map: map
            });
            
            // 인포윈도우 생성
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `
                <div style="padding: 10px; text-align: center;">
                  <div style="font-weight: bold; margin-bottom: 5px;">성모이음 정신건강의학과</div>
                  <div style="font-size: 12px; color: #666;">
                    서울 은평구 진관동 72<br/>
                    드림스퀘어 4층
                  </div>
                </div>
              `
            });
            
            // 마커 클릭 시 인포윈도우 표시
            window.kakao.maps.event.addListener(marker, 'click', () => {
              infowindow.open(map, marker);
            });
            
            // 지도 로드 완료 후 인포윈도우 자동 표시
            infowindow.open(map, marker);
          }
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef}
      style={{ width, height }}
      className={`rounded-lg border border-slate-200 ${className}`}
    />
  );
}
