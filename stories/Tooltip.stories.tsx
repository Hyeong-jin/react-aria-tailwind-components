import type { Meta } from '@storybook/react'
import { PrinterIcon, SaveIcon } from 'lucide-react'
import React from 'react'
import { TooltipTrigger } from 'react-aria-components'
import { Button } from '../src/Button'
import { Tooltip } from '../src/Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'OVERLAYS/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args: any) => (
  <div className="flex gap-2">
    <TooltipTrigger>
      <Button variant="secondary" className="px-2">
        <SaveIcon className="h-5 w-5" />
      </Button>
      <Tooltip {...args}>Save</Tooltip>
    </TooltipTrigger>
    <TooltipTrigger>
      <Button variant="secondary" className="px-2">
        <PrinterIcon className="h-5 w-5" />
      </Button>
      <Tooltip {...args}>Print</Tooltip>
    </TooltipTrigger>
  </div>
)
