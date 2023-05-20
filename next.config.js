/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites () {
    return [
      {
        source: '/pe/',
        destination: '/localized_files_2/es_pe/pe/'
      },
      {
        source: '/pe/servicios/consultoria-customer-relationship-management/',
        destination: '/localized_files_2/es_pe/servicios/crm/crm'
      },
      {
        source: '/pe/servicios/canales-digitales-y-growth-hacking/',
        destination: '/localized_files_2/es_pe/servicios/canales/canales'
      },
      {
        source: '/pe/servicios/consultoria-ecommerce/',
        destination: '/localized_files_2/es_pe/servicios/ecommerce/ecommerce'
      },
      {
        source: '/pe/servicios/headhunting-y-mentoring/',
        destination: '/localized_files_2/es_pe/servicios/dts/dts'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/',
        destination: '/localized_files_2/es_pe/servicios/aaia/aaia'
      },
      {
        source: '/pe/servicios/experience-design/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/xd'
      },
      {
        source: '/pe/servicios/digital-advertising/',
        destination: '/localized_files_2/es_pe/servicios/digital_ads/da/'
      },
      {
        source: '/pe/servicios/marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/mkt'
      }, // aaia
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/workshop-estrategia-marca/',
        destination: '/localized_files_2/es_pe/servicios/aaia/workshop_estrategia'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/caso-uso-machine-learning/',
        destination: '/localized_files_2/es_pe/servicios/aaia/machine_learning'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/implementacion-migracion-google-analytics-4/',
        destination: '/localized_files_2/es_pe/servicios/aaia/migracion_ga4'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/digital-advanced-analytics/',
        destination: '/localized_files_2/es_pe/servicios/aaia/advanced_analytics'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/consultoria-analitica-digital/',
        destination: '/localized_files_2/es_pe/servicios/aaia/analitica_digital'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/predictive-customer-analytics/',
        destination: '/localized_files_2/es_pe/servicios/aaia/predictive_analytics'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/predictive-sales-product-analytics/',
        destination: '/localized_files_2/es_pe/servicios/aaia/predictive_sales'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/chatbots-inteligencia-artificial/',
        destination: '/localized_files_2/es_pe/servicios/aaia/chatbots_inteligencia'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/sentiment-analysis-social-listening/',
        destination: '/localized_files_2/es_pe/servicios/aaia/sentiment_analysis'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/integracion-fuentes-de-datos/',
        destination: '/localized_files_2/es_pe/servicios/aaia/integracion_datos'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/automatizacion_reportes/',
        destination: '/localized_files_2/es_pe/servicios/aaia/automatizacion_reportes'
      }, // canales
      {
        source: '/pe/servicios/canales-digitales-y-growth-hacking/marketing-de-contenidos/',
        destination: '/localized_files_2/es_pe/servicios/canales/marketing_contenidos'
      },
      {
        source: '/pe/servicios/canales-digitales-y-growth-hacking/seo-rank-tracker/',
        destination: '/localized_files_2/es_pe/servicios/canales/seo_rank'
      },
      {
        source: '/pe/servicios/canales-digitales-y-growth-hacking/growth-hacking/',
        destination: '/localized_files_2/es_pe/servicios/canales/growth_hacking'
      }, // ecommerce
      {
        source: '/pe/servicios/consultoria-ecommerce/desarrollo-modelo-ecommerce/',
        destination: '/localized_files_2/es_pe/servicios/ecommerce/desarrollo_modelo'
      },
      {
        source: '/pe/servicios/consultoria-ecommerce/acompanamiento-ecommerce/',
        destination: '/localized_files_2/es_pe/servicios/ecommerce/acompanamiento_ecommerce'
      },
      {
        source: '/pe/servicios/consultoria-ecommerce/growth-analytics-para-ecommerce/',
        destination: '/localized_files_2/es_pe/servicios/ecommerce/growth_ecommerce'
      }, // hh
      {
        source: '/pe/servicios/headhunting-y-mentoring/headhunting/',
        destination: '/localized_files_2/es_pe/servicios/dts/head_hunting'
      },
      {
        source: '/pe/servicios/headhunting-y-mentoring/outsourcing/',
        destination: '/localized_files_2/es_pe/servicios/dts/outsourcing'
      },
      {
        source: '/pe/servicios/headhunting-y-mentoring/mentoryOutsourcing/',
        destination: '/localized_files_2/es_pe/servicios/dts/mentoryOutsourcing'
      }, // crm
      {
        source: '/pe/servicios/consultoria-customer-relationship-management/full-service-crm/',
        destination: '/localized_files_2/es_pe/servicios/crm/full_service'
      },
      {
        source: '/pe/servicios/consultoria-customer-relationship-management/accelerator/',
        destination: '/localized_files_2/es_pe/servicios/crm/accelerator'
      },
      {
        source: '/pe/servicios/consultoria-customer-relationship-management/quick-start-crm/',
        destination: '/localized_files_2/es_pe/servicios/crm/quick_start'
      },
      // xd
      {
        source: '/pe/servicios/experience-design/conocimiento-del-consumidor/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/conocimiento'
      },
      {
        source: '/pe/servicios/experience-design/mapeo-de-experiencias/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/mapeo'
      },
      {
        source: '/pe/servicios/experience-design/medicion-experiencia-de-usuario/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/medicion'
      },
      {
        source: '/pe/servicios/experience-design/diseno-de-experiencias/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/diseno'
      },
      {
        source: '/pe/servicios/experience-design/transformacion-digital/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/transformacion'
      },
      // da
      {
        source: '/pe/servicios/digital-advertising/inhousing-publicidad-digital/',
        destination: '/localized_files_2/es_pe/servicios/digital_ads/inhousing'
      },
      {
        source: '/pe/servicios/digital-advertising/auditoria-publicidad-digital/',
        destination: '/localized_files_2/es_pe/servicios/digital_ads/auditoria'
      },
      // mkt
      {
        source: '/es_pe/servicios/mkt/pe/servicios/marketing-automation/reporting-roi-automatizado-360-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/reporting_roi'
      },
      {
        source: '/pe/servicios/marketing-automation/automatizacion-leads-remarketing-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/automatizacion_leads'
      },
      {
        source: '/pe/servicios/marketing-automation/personalizacion-ecommerce-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/personalizacion_ecommerce'
      },
      {
        source: '/pe/servicios/marketing-automation/automatizacion-de-contenido-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/automatizacion_contenido'
      },
      {
        source: '/pe/servicios/marketing-automation/chatbots-ecommerce-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/chatbot_ecommerce'
      },
      {
        source: '/pe/servicios/marketing-automation/planning-contenido-agil-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/planing_contenido'
      },
      {
        source: '/pe/servicios/marketing-automation/lead-nurturing-automatizado-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/lead_nurturing'
      },
      {
        source: '/pe/servicios/marketing-automation/centralizacion-insights-redes-sociales-marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/centralizacion_insights'
      }
    ]
  }
}

module.exports = nextConfig
