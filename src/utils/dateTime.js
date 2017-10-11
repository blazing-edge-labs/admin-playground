import moment from 'moment'

export function alarmFormat (time) {
  return moment(time).format('DD/MM/YYYY, HH:mm:ss')
}
