import icon1 from '../../public/assets/Achieves/icon_1.svg'
import icon2 from '../../public/assets/Achieves/icon_2.svg'
import icon3 from '../../public/assets/Achieves/icon_3.svg'
import icon1light from '../../public/assets/Achieves/icon_1_light.svg'
import icon2light from '../../public/assets/Achieves/icon_2_light.svg'
import icon3light from '../../public/assets/Achieves/icon_3_light.svg'
import defaultimg from '../../public/assets/Test/default.svg'
export const dataAchievesFull = {
  title: '¿Qué es lo que podemos lograr?',
  solution: 'full-service-crm',
  service: 'crm',
  mainImg: defaultimg.src,
  bullets: [
    {
      src: icon1.src,
      desc: 'Permite un seguimiento a cada etapa, desde prospecto hasta cliente.'
    },
    {
      src: icon2.src,
      desc: 'Mejora la eficiencia al optimizar la comunicación, los procesos y las operaciones de ventas, así como realizar múltiples tareas y tener un foco en la analítica avanzada.'
    },
    {
      src: icon3.src,
      desc: 'Captura datos automáticamente, obteniendo insights de manera instantánea, para tomar mejores decisiones con la ayuda de un pronóstico predictivo.'
    }
  ]
}

export const dataActionsFull = {
  title: '¿Cómo lo haremos posible?',
  mainImg: defaultimg.src,
  bullets: [
    {
      src: icon1light.src,
      subtitle: 'Extracción',
      desc: 'Nutrimos la data comportamental de analytics con información del usuario hasta la conversión'
    },
    {
      src: icon2light.src,
      subtitle: 'Descripción de resultados.',
      desc: 'Obtendrás una descripción detallada de tu resultado final con puntos de mejora y fortalezas.'
    },
    {
      src: icon3light.src,
      subtitle: 'Activación',
      desc: 'Los datos se integrarán con herramientas publicitarias y sistemas de visualización automatizados.'
    }
  ]
}
