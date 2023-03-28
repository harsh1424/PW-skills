function linkedinValidator(url){
    const regex = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g
    if(regex.test(url)){
        console.log("valid url")
    }
    else{
        console.log("invalid url")
    }
}

const linkedin = "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGzI9018Ms5HwAAAYcnBIeI72IpuCzRiMgMpfPE5D4DAXViHSIFvglN099lXOqoy1u2coCy4D_o7-l2PfS45tOuWYP-VzpIC2Yy8h7Hm6niIvPK6YXY1wWBS0uVyuVcsTytN4g=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2F"

linkedinValidator(linkedin)