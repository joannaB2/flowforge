'use client';

import { Form } from '@/types/Form';
import { FormPreview } from '../[id]/_components/FormPreview';

export default function FormPage() {
  const newFormConfig: Form = {
    id: null,
    userId: 'user_01',
    name: '',
    description: '',
    slug: '',
    status: 'draft',
    fields: [],
  };
  return <FormPreview formData={newFormConfig} />;
}
