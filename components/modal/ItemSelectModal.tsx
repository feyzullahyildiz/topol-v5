import { Demodal, useModal } from 'demodal';
import { useCallback } from 'react';

import { cn } from '@/lib/utils';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

export const ItemSelectModal = Demodal.create(() => {
  const modal = useModal();

  const onClick = useCallback(
    (value: string | null) => {
      modal.resolve(value);
      modal.close();
    },
    [modal]
  );

  return (
    <Dialog open={modal.isOpen} onOpenChange={() => onClick(null)}>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Add new content type</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2">
          <Item onClick={onClick} id="text">
            Text
          </Item>
          <Item id="image" onClick={onClick}>
            Image
          </Item>
          <Item disabled>GIF</Item>
          <Item disabled>Button</Item>
          <Item disabled>Divider</Item>
          <Item disabled>Spacing</Item>
          <Item disabled>Social</Item>
          <Item disabled>Video</Item>
          <Item disabled>HTML</Item>
          <Item disabled>Product</Item>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

export const openItemSelectModal = () => Demodal.open(ItemSelectModal, {});

function Item({
  id,
  children,
  className,
  disabled,
  onClick,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (id: string) => void;
}) {
  return (
    <div
      onClick={id ? () => onClick?.(id) : undefined}
      className={cn(
        'select-none',
        'col-span-1 flex size-28 items-center justify-center border-2',
        className,
        !disabled && 'hover:border-2 hover:border-sky-400',
        !disabled && 'bg-accent',
        disabled && 'opacity-40',
        'cursor-pointer',
        disabled && 'cursor-not-allowed'
      )}
    >
      {children}
    </div>
  );
}
