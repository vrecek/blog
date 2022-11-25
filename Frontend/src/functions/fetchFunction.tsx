import Fetches, { MixReturn, RequestType } from "./Fetches"
import { LoadingCss, LoadingPosition } from "./Loading"

interface QueryInfo {
    url: string,
    type: RequestType,
    uploadType?: 'normal' | 'multer'
    body?: any
}

interface LoadingInfo {
    position?: LoadingPosition,
    appendTo?: HTMLElement,
    bgClr?: string
}

type SuccessCB<T> = (data: T) => void
type ErrorCB = (err: MixReturn<any>) => void
type FinallyCB = () => void

const fetchFunction = async <T = any>(query: QueryInfo, load: LoadingInfo, successCb: SuccessCB<T>, errorCb: ErrorCB, finallyCb?: FinallyCB) => {
    const {url, type, body, uploadType} = query
    const {position, bgClr, appendTo} = load

    const l: LoadingCss = new LoadingCss()
    if(position && appendTo) {
        l.defaultStyleDots({
            position,
            backgroundClr: bgClr
        })
        
        l.append(appendTo)
    }

    try {
        let data: MixReturn<T> | null = null

        uploadType === 'multer'
            ? data = await Fetches.multer<T>(url, type, body)
            : data = await Fetches.mix<T>(url, type, body)

            
        successCb(data.json)

    }catch(err: any) {
        errorCb(err)

    }finally { 
        l.remove() 

        if(finallyCb) finallyCb()
    }
}

export default fetchFunction