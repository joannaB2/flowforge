'use client';

import { mockForms } from '@/mocks/forms';
import { notFound, useParams } from 'next/navigation';
import { FormPreview } from './_components/FormPreview';

export default function FormPage() {
  const params = useParams();
  const formId = params.id;
  const currentForm = mockForms.find((form) => form.id === formId);

  if (!currentForm) {
    notFound();
  }

  return <FormPreview formData={currentForm} />;
}
