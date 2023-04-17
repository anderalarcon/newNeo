import style from './JobsFrame.module.scss'
// import Script from 'next/script'
import Head from 'next/head'

const JobsFrame = () => {
  return (
    <div className={style.hero}>
      {/* <div className={style.hero_container}>
        <Script type="text/javascript" src="https://app.jazz.co/widgets/basic/create/neo" charset="utf-8"></Script>
      </div> */}

      {/* <div className={style.hero_container}>
        <iframe name="resumator-job-frame" id="resumator-job-frame" className="resumator-advanced-widget" src="//neo.applytojob.com/apply/jobs/" width="100%" height={500} scrolling="yes" frameBorder="0"></iframe>
        <Script>function resizeResumatorIframe(height,nojump){if(nojump== 0){window.scrollTo(0,0);}document.getElementById("resumator-job-frame").height = parseInt(height)+20;}</Script>
        <a href="//neo.applytojob.com/apply/jobs/">View all jobs</a>
        <iframe src="" frameBorder="0"></iframe>
      </div> */}

      <div className={style.hero_container}>
        <iframe
          name="resumator-job-frame"
          id="resumator-job-frame"
          className="resumator-advanced-widget"
          src="//neo.applytojob.com/apply/jobs/"
          width="100%"
          scrolling="no"
          frameBorder="0"
          height={700}
          // allowTransparency="true"
        ></iframe>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                function resizeResumatorIframe(height, nojump) {
                  if (nojump == 0) {
                    window.scrollTo(0, 0);
                  }
                  document.getElementById("resumator-job-frame").height =
                    parseInt(height) + 20;
                }
              `
            }}
          />
        </Head>
      </div>
    </div>
  )
}

export default JobsFrame
