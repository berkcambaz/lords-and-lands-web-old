import { Soda } from "@dorkodu/soda";

interface Props {
  onclick?: () => any,
  class?: string
}

function Back(props?: Props) {
  return (
    <svg class={props?.class} onclick={props?.onclick} width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
    </svg>
  )
}

export const ICONS = {
  Back
}