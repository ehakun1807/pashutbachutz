
// Add React import to provide access to React namespace/types
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface ConsultationResponse {
  tips: string[];
  summary: string;
  recommendedPlants: string[];
}
