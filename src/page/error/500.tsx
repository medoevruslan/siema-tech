import { useNavigate } from 'react-router-dom';

import { FallbackPage } from '@/page/error/fallback';

export function ServerError() {
  const navigate = useNavigate();

  const handleResetPage = () => {
    navigate('/');
  };

  return <FallbackPage error={'Server error occured'} resetErrorBoundary={handleResetPage} />;
}
