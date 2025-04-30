import { Demodal, useModal } from 'demodal';

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

  const onClick = (value: string | null) => {
    modal.resolve(value);
    modal.close();
  };

  // "title" and "message" are props sent with "modal.open()"
  return (
    <Dialog open={modal.isOpen} onOpenChange={() => onClick(null)}>
      <DialogContent className="w-auto">
        <DialogHeader>
          <DialogTitle>Yeni içerik türü ekle</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2">
          <Item onClick={onClick} id="text">
            Metin
          </Item>
          <Item disabled>Resim</Item>
          <Item disabled>GIF</Item>
          <Item disabled>Buton</Item>
          <Item disabled>Ayraç</Item>
          <Item disabled>Boşluk</Item>
          <Item disabled>Sosyal</Item>
          <Item disabled>Video</Item>
          <Item disabled>HTML</Item>
          <Item disabled>Ürün</Item>
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
