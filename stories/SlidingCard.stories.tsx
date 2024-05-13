import React from 'react'
import { SlidingCard, SlidingCardGroup } from '../src/SlidingCard'

export default {
  title: 'Navigation/SlidingCardGroup',
  component: SlidingCardGroup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    className: 'h-[600px]',
    children: (
      <>
        <SlidingCard
          value="1"
          className="bg-[url('/assets/images/pexels-photo-39811.jpeg')]"
        >
          <h4 className="text-xl font-bold">CARD 1</h4>
          <p>CARD 1 sdfsdf sdfsd fsdf sdfsdflwjkelwkejs fflskdjf sdflkjsdfl sdfljkwej rlskdjfl sdfjlsdfjw lerjlsdfj jsldfjsdf
            sldfkjsdlfkj sdfl welksjdfl sdf. sldfkjsdlf . sldfkjsdlfkjsldf sdfsdf sdf sdf sdf sdf sd fs dfs df sdf sd f
          </p>
        </SlidingCard>
        <SlidingCard
          value="2"
          className="bg-[url('/assets/images/pexels-photo-326055.webp')]"
        >
          <h4 className="text-xl font-bold">CARD 1</h4>
          <p>CARD 1 sdfsdf sdfsd fsdf sdfsdflwjkelwkejs fflskdjf sdflkjsdfl sdfljkwej rlskdjfl sdfjlsdfjw lerjlsdfj jsldfjsdf
            sldfkjsdlfkj sdfl welksjdfl sdf. sldfkjsdlf . sldfkjsdlfkjsldf sdfsdf sdf sdf sdf sdf sd fs dfs df sdf sd f
          </p>
          <p>CARD 1</p>
        </SlidingCard>
        <SlidingCard
          value="3"
          className="bg-[url('/assets/images/pexels-photo-414144.webp')]"
        >
          <h4 className="text-xl font-bold">CARD 1</h4>
          <p>CARD 1 sdfsdf sdfsd fsdf sdfsdflwjkelwkejs fflskdjf sdflkjsdfl sdfljkwej rlskdjfl sdfjlsdfjw lerjlsdfj jsldfjsdf
            sldfkjsdlfkj sdfl welksjdfl sdf. sldfkjsdlf . sldfkjsdlfkjsldf sdfsdf sdf sdf sdf sdf sd fs dfs df sdf sd f
          </p>
          <p>CARD 1</p>
        </SlidingCard>
        <SlidingCard
          value="4"
          className="bg-[url('/assets/images/pexels-photo-592077.jpeg')]"
        >
          <h4 className="text-xl font-bold">CARD 1</h4>
          <p>CARD 1</p>
          <p>CARD 1 sdfsdf sdfsd fsdf sdfsdflwjkelwkejs fflskdjf sdflkjsdfl sdfljkwej rlskdjfl sdfjlsdfjw lerjlsdfj jsldfjsdf
            sldfkjsdlfkj sdfl welksjdfl sdf. sldfkjsdlf . sldfkjsdlfkjsldf sdfsdf sdf sdf sdf sdf sd fs dfs df sdf sd f
          </p>
        </SlidingCard>
        <SlidingCard
          value="5"
          className="bg-[url('/assets/images/pexels-photo-1172675.jpeg')]"
        >
          <h4 className="text-xl font-bold">CARD 1</h4>
          <p>CARD 1</p>
          <p>CARD 1 sdfsdf sdfsd fsdf sdfsdflwjkelwkejs fflskdjf sdflkjsdfl sdfljkwej rlskdjfl sdfjlsdfjw lerjlsdfj jsldfjsdf
            sldfkjsdlfkj sdfl welksjdfl sdf. sldfkjsdlf . sldfkjsdlfkjsldf sdfsdf sdf sdf sdf sdf sd fs dfs df sdf sd f
          </p>
        </SlidingCard>
      </>
    ),
  },
}
export const Default = {
  args: {},
}
