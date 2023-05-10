import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useUtm = () => {
  const router = useRouter()
  const [urlHasUtm, setUrlHasUtm] = useState(false)
  const getUtms = () => {
    if (Object.keys(router.query).length > 0) {
      setUrlHasUtm(true)
    }
  }

  useEffect(() => {
    getUtms()
  }, [router])

  return [urlHasUtm, router]
}
