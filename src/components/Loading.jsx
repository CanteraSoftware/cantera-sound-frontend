import React from 'react';
import '../styles/Loading.css'

export function Loading() {
  return (
    <div class="Loading-wrapper">
      <span class="Loading-circle"></span>
      <span class="Loading-circle"></span>
      <span class="Loading-circle"></span>
      <span class="Loading-shadow"></span>
      <span class="Loading-shadow"></span>
      <span class="Loading-shadow"></span>
    </div>
  );
}
