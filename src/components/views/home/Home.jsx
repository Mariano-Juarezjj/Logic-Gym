import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import WidgetClima from '../components/WidgetClima';

import BannerInfinito from '../components/BannerInfinito';

import '../App.css';

import publicidad from '../components/punlicidad';
import publicidad0 from '../assets/publicidad0.png';
import publicidad1 from '../assets/publicidad1.jpg';
import publicidad2 from '../assets/publicidad2.webp';
import publicidad3 from '../assets/publicidad3.jpg';
import publicidad4 from '../assets/publicidad4.png';
import publicidad5 from '../assets/publicidad5.jpg';

import imgCuerda from '../assets/Cuerda6.jpg';
import imgRemera from '../assets/remera5.jpg';
import imgShaker from '../assets/Shaker4.jpg';
import imgGuantes from '../assets/Guantes3.jpg';
import imgCreatina from '../assets/creatina.jpg';
import imgProteina from '../assets/proteina1.jpg';
import heroVideo from '../assets/videoLogicGym.mp4';

import asesoramiento from '../assets/asesoramientonutricional.webp';
import box from '../assets/clasesdeBoxCrossfit.jpg';
import clasesg from '../assets/clasesgrupales.jpg';
import salam from '../assets/SaladeMusculación.jpg';
import evaluacionf from '../assets/evaluacionfisica.jpg';
import yoga from '../assets/yoga.jpg';

const mapaImagenesServicios = {
  salam,
  box,
  clasesg,
  asesoramiento,
  yoga,
  evaluacionf,
};

const servicios = [
  {
    titulo: 'Sala de Musculación',
    descripcion: 'Más de 1.200m² con equipos Technogym de última generación, zona de peso libre y sector funcional con instructores certificados.',
    imagen: 'salam',
  },
  {
    titulo: 'Box y Funcional',
    descripcion: 'Clases de Box, CrossFit y Entrenamiento Funcional de alta intensidad dictadas por profesionales con certificación internacional.',
    imagen: 'box',
  },
  {
    titulo: 'Clases Grupales',
    descripcion: 'Ritmos, HIIT, Stretching, Yoga y más. Más de 20 disciplinas con horarios flexibles para adaptarse a tu rutina diaria.',
    imagen: 'clasesg',
  },
  {
    titulo: 'Asesoramiento Nutricional',
    descripcion: 'Consultas personalizadas con nuestro equipo de nutricionistas para complementar tu entrenamiento y optimizar tus resultados.',
    imagen: 'asesoramiento',
  },
  {
    titulo: 'Yoga y Stretching',
    descripcion: 'Sesiones de yoga, meditación y elongación para mejorar la flexibilidad, reducir el estrés y equilibrar el cuerpo y la mente.',
    imagen: 'yoga',
  },
  {
    titulo: 'Evaluación Física',
    descripcion: 'Medición de composición corporal, test de fuerza y resistencia para establecer tu punto de partida y monitorear tu progreso.',
    imagen: 'evaluacionf',
  },
];