export interface ISliderButtons {
    sliderRef: React.RefObject<HTMLDivElement>
    slidersCount: number
}

// SLIDER SECTION

export interface ISlide extends IPopularText {
    image: string
    id: string
}

export interface IPopularText {
    header: string
    para: string
}

//---------------------------------------------------------