interface TakePhoto {
  cameraMode: string
  filter: string
  burst: number
}

interface Short {
  createShort(): string
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){}
}

class YouTube implements TakePhoto , Short{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: number,
  ){}

  createShort(): string {
    return 'Your short is created'
  }
}