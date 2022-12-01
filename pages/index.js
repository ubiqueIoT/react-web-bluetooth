import { useState, useEffect } from 'react'

export const ADAFRUIT_TEMPERATURE_SERVICE_UUID = 'ADAF0100-C332-42A8-93BD-25E905756CB8'.toLowerCase()
export const ADAFRUIT_TEMPERATURE_CHARACTERISTIC_UUID = 'ADAF0101-C332-42A8-93BD-25E905756CB8'.toLowerCase()

export default function Home () {
  const [supportsBle, setSupportsBle] = useState(false)
  const [connectedDevice, setConnectedDevice] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [temperature, setTemperature] = useState(0)

  useEffect(() => {
    if (navigator.bluetooth) {
      setSupportsBle(true)
    }
  }, [])

  const onDisconnected = (event) => {
    setConnectedDevice(null)
  }

  const notifyEventChange = async (e) => {
    const val = e.currentTarget.value.getFloat32(0, true)
    setTemperature(val)
  }

  const connectToDevice = async () => {
    if (!supportsBle) {
      return
    }

    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{
          namePrefix: 'CIRCUITPY'
        }],
        optionalServices: [ADAFRUIT_TEMPERATURE_SERVICE_UUID]

      })
      if (!device) {
        throw new Error()
      }

      device.addEventListener('gattserverdisconnected', onDisconnected)
      setIsLoading(true)

      const server = await device.gatt.connect()
      const temperatureService = await server.getPrimaryService(ADAFRUIT_TEMPERATURE_SERVICE_UUID)
      const tempCharacteristic = await temperatureService.getCharacteristic(ADAFRUIT_TEMPERATURE_CHARACTERISTIC_UUID)

      await tempCharacteristic.startNotifications()
      tempCharacteristic.addEventListener('characteristicvaluechanged', notifyEventChange)

      setConnectedDevice(server)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className='flex min-h-screen min-w-screen justify-center items-center'>
        <h2>Loading...</h2>
      </div>
    )
  }

  return (
    <div className='flex min-h-screen min-w-screen justify-center items-center'>
      {connectedDevice === null
        ? (<button onClick={connectToDevice} className='btn'>Connect</button>)
        : (<div className='text-2xl font-bold'>{temperature}</div>)}
    </div>
  )
}
