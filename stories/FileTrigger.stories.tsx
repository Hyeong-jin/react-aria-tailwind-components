import React from 'react'
import type { Meta } from '@storybook/react'

import { FileTrigger } from 'react-aria-components'
import { Button } from '../src'

const meta: Meta<typeof Example> = {
  title: 'BUTTON/FileTrigger',
  component: FileTrigger,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Example = () => {
  let [file, setFile] = React.useState<string[] | null>(null)

  return (
    <>
      <FileTrigger
        onSelect={(e: FileList | null) => {
          if (e === null) {
            return
          }
          let files = Array.from(e)
          let filenames = files.map((file: File) => file.name)
          setFile(filenames)
        }}
      >
        <Button>Select a file</Button>
      </FileTrigger>
      {file && <div>{file}</div>}
    </>
  )
}
