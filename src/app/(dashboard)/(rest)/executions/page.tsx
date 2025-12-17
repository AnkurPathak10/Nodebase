import { requireAuth } from '@/lib/auth-utils';
import React from 'react'

const Page = async () => {
  await requireAuth();

  return  <p> executions </p>

}

export default Page