'use client';
import { usePromiseModal } from '@prezly/react-promise-modal';
import React from 'react';

import { DialogFooter } from '../ui/dialog';
import { DialogTitle } from '../ui/dialog';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '../ui/dialog';

export const useItemSelectModal = () => {
  return usePromiseModal(({ show, stage, onDismiss, onSubmit }) => {
    console.log('show', show);
    console.log('stage', stage);
    return (
      <Dialog
        open={show}
        onOpenChange={(open) => {
          onSubmit(open);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently delete this file
              from our servers?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onDismiss();
              }}
            >
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  });
};
