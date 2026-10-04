'use client';

import { ConfirmDialog } from '@/common/_components/ConfirmDialog';
import { Button } from '@/common/ui/button';
import { Card } from '@/common/ui/card';
import { Form } from '@/types/Form';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export const FormList = ({ formList }: { formList: Form[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
      {formList.length === 0 ? (
        <div className="text-gray-500">You have no forms yet.</div>
      ) : (
        formList.map((form) => (
          <Card key={form.id} className="w-full px-6 py-4">
            <div className="text-primary mb-4 flex items-center justify-between text-lg font-bold">
              {form.name}
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 cursor-pointer"
                title="View Form"
              >
                <Eye className="inline-block h-4 w-4" />
              </Button>
            </div>
            <div className="flex w-full justify-between">
              <Button
                nativeButton={false}
                render={<Link href={`/forms/${form.id}`}>Edit form</Link>}
              />
              <ConfirmDialog
                title="Delete Form"
                message={`Are you sure you want to delete the form "${form.name}"? This action cannot be undone.`}
                onConfirm={() => console.log('delete form', form.id)}
                cancelText="Keep Form"
                confirmText="Delete Form"
                dialogTriggerText="Delete Form"
              />
            </div>
          </Card>
        ))
      )}
    </div>
  );
};
