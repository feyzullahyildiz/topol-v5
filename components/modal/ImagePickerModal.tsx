import { Demodal, useModal } from 'demodal';
import { useCallback, useMemo } from 'react';

import { cn } from '@/lib/utils';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

export const ImagePickerModal = Demodal.create(() => {
  const modal = useModal();

  const onClick = useCallback(
    (value: string | null) => {
      modal.resolve(value);
      modal.close();
    },
    [modal]
  );

  const imageIds = useMemo(() => {
    return Array.from({ length: 42 }, (_, i) => (i + 35).toString());
  }, []);
  const bigImageIds = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => (i + 290).toString());
  }, []);
  return (
    <Dialog open={modal.isOpen} onOpenChange={() => onClick(null)}>
      <DialogContent className="max-w-auto">
        <DialogHeader>
          <DialogTitle>Select an image</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="max-h-[40vh] overflow-auto">
          <div className="grid grid-cols-4 gap-2">
            {bigImageIds.map((id) => (
              <ItemBig key={id} onClick={onClick} id={id} />
            ))}
            {imageIds.map((id) => (
              <Item key={id} onClick={onClick} id={id} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export const openImagePickerModal = () => Demodal.open(ImagePickerModal, {});

function Item({ id, onClick }: { id: string; onClick: (id: string) => void }) {
  const miniUrl = `https://picsum.photos/id/${id}/64/64`;
  const bigiUrl = `https://picsum.photos/id/${id}/400/300`;
  return (
    <img
      src={miniUrl}
      onClick={() => onClick(bigiUrl)}
      className={cn(
        'select-none',
        'col-span-1 flex size-28 items-center justify-center border-2',
        'hover:border-primary hover:border-2'
      )}
    />
  );
}
function ItemBig({ id, onClick }: { id: string; onClick: (id: string) => void }) {
  const miniUrl = `https://picsum.photos/id/${id}/128/64`;
  const bigiUrl = `https://picsum.photos/id/${id}/800/300`;
  return (
    <img
      src={miniUrl}
      onClick={() => onClick(bigiUrl)}
      className={cn(
        'select-none',
        'col-span-2 flex h-28 w-56 items-center justify-center border-2',
        'hover:border-primary hover:border-2'
      )}
    />
  );
}
