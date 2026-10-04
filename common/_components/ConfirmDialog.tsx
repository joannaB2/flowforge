'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/common/ui/alert-dialog';
import { Button } from '../ui/button';

interface ConfirmDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  dialogTriggerText: string;
  cancelText?: string;
  confirmText?: string;
}

export const ConfirmDialog = ({
  title,
  message,
  onConfirm,
  dialogTriggerText,
  cancelText,
  confirmText,
}: ConfirmDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="destructive">{dialogTriggerText}</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText || 'Cancel'}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            {confirmText || 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
