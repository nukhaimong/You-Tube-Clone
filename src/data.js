export const API_KEY = 'AIzaSyBWC0VkgddgtlGl8d2f_uDGy3CCZxbKblY';

export const value_converter = (value) => {
  if (value >= 1000000) {
    return value = Math.floor(value/1000000) + "M"
  } else if (value >= 1000) {
    return value = Math.floor(value/1000) + "K" 
  } else {
    return value
  }
}