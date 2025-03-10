import React, { useMemo } from 'react';

interface componentProps {
  children: React.ReactNode;
  loading?: boolean;
}

export default function BaseBoxLoading({ children, loading }: componentProps) {
  const className = useMemo(
    () => (loading ? 'box-loading z-0' : ''),
    [loading],
  );

  return <div className={className}>{children}</div>;
}
