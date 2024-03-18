import { FallbackProps } from 'react-error-boundary'

import { Container } from '@/components/container/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useMediaQuery } from 'usehooks-ts'

import s from './fallback.module.css'

export function FallbackPage({ error, resetErrorBoundary }: FallbackProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container className={s.container}>
      <div className={s.header}>
        <Typography mobile={isMobile} variant={'headline'}>
          Error
        </Typography>
        <Typography mobile={isMobile} variant={'question'}>
          This should not have happened
        </Typography>
      </div>
      <div className={s.header}>
        <div>
          <p>Something went wrong:</p>
          <pre>
            <code className={s.textWarning}>{error?.message}</code>
          </pre>
        </div>
      </div>
      <div className={s.header}>
        <div>
          <Button onClick={resetErrorBoundary} variant={'primary'}>
            Try again
          </Button>
        </div>
      </div>
    </Container>
  );
}
