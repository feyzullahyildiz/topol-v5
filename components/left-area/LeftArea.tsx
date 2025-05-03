'use client';
import React from 'react';

import { cn } from '@/util/cn';

import { TabsContent } from '../ui/tabs';
import { LeftAreaItemProperties } from './LeftAreaItemProperties';
import { LeftAreaItemsDroppable } from './LeftAreaItemsDroppable';
import { LeftAreaRowDroppable } from './LeftAreaRowDroppable';
import { Row_1_Column_Component, Row_2_Column_Component, Row_3_Column_Component } from './row/rows';
interface Props {
  className?: string;
  children?: React.ReactNode;
}
export const LeftArea = ({ className }: Props) => {
  return (
    <>
      <TabsContent value="layout">
        <LeftAreaRowDroppable className={cn(className, 'flex flex-col gap-4 p-4')}>
          <Row_1_Column_Component />
          <Row_2_Column_Component />
          <Row_3_Column_Component />
        </LeftAreaRowDroppable>
      </TabsContent>
      <TabsContent value="items">
        <LeftAreaItemsDroppable className={cn(className, 'flex flex-col gap-4 p-4')}>
          <span>TEXT</span>
          <span>IMAGE</span>
        </LeftAreaItemsDroppable>
      </TabsContent>
      <TabsContent value={null!}>
        <LeftAreaItemProperties />
      </TabsContent>
    </>
  );
};
