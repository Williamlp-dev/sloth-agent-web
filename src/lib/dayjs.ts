import lib from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

lib.extend(relativeTime)

import('dayjs/locale/pt-BR').then(() => {
  lib.locale('pt-BR')
})

export const dayjs = lib
