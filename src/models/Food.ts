class Food {
  image: string
  imageNav?: string
  title: string
  rating: number 
  infos: string[]
  description: string
  id: number

  constructor(
    image: string,
    imageNav: string,
    title: string,
    rating: number,
    infos: string[],
    description: string,
    id: number
  ) {
    this.image = image
    this.imageNav = imageNav
    this.title = title
    this.rating = rating
    this.infos = infos
    this.description = description
    this.id = id
  }
}

export default Food
