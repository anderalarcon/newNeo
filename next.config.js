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
      }
    ]
  }
}

module.exports = nextConfig
