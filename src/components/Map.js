'use client'
import React, {useEffect, useRef} from 'react';
import {Loader} from "@googlemaps/js-api-loader";

export default function Map({lat, lng}) {
  const mapRef = useRef(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'weekly'
      })

      const {Map} = await loader.importLibrary('maps')
      const { Marker } = await loader.importLibrary('marker')

      const position = {
        lat: lat,
        lng: lng
      }

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: 'MY_NEXTJS_MAPID'
      }

      const map = new Map(mapRef.current, mapOptions)

      const marker = new Marker({
        map: map,
        position: position
      })
    }
    initMap().then()
  }, [lat, lng])

  return (
  <div style={{width: '100%', height: '100%'}} ref={mapRef} />
  )
}