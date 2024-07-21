'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

interface Village {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}

interface KakaoMapProps {
  initialLat: number;
  initialLon: number;
  level: number;
  villages: Village[];
  isMarkerClicked?: boolean;
}

const KakaoMap = ({ villages, initialLat, initialLon, level, isMarkerClicked = false }: KakaoMapProps) => {
  useEffect(() => {
    const initializeMap = () => {
      const container = document.getElementById('map');
      if (!container) {
        console.error('Map container not found');
        return;
      }

      const options = {
        center: new window.kakao.maps.LatLng(initialLat, initialLon),
        level,
      };
      const map = new window.kakao.maps.Map(container, options);

      villages.forEach((village) => {
        const markerPosition = new window.kakao.maps.LatLng(village.latitude, village.longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${village.title}</div>`,
        });

        window.kakao.maps.event.addListener(marker, 'mouseover', () => {
          infoWindow.open(map, marker);
        });

        window.kakao.maps.event.addListener(marker, 'mouseout', () => {
          infoWindow.close();
        });

        window.kakao.maps.event.addListener(marker, 'click', () => {
          if (isMarkerClicked) {
            window.location.href = `/village/${village.id}`;
          }
        });
      });
    };

    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
        window.kakao.maps.load(() => initializeMap());
        return;
      }

      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;
      script.async = true;
      script.onload = () => {
        if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
          window.kakao.maps.load(() => {
            initializeMap();
          });
        } else {
          console.error('Kakao maps load function is not available');
        }
      };
      script.onerror = () => {
        console.error('Failed to load Kakao Maps script');
      };

      document.head.appendChild(script);
    };

    loadKakaoMap();
  }, [villages, initialLat, initialLon, level, isMarkerClicked]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '400px',
      }}
    />
  );
};

export default KakaoMap;
