
import client from './sanity';
import groq from 'groq';
 
// import ImageUrlBuilder from '@sanity/image-url';
const blogFields=`
text,
'image':image.asset->url,
'slug': slug.current,
`
// const builder=ImageUrlBuilder(client)
// export function urlFor(source){
//   return builder.image(source )
// }


export async function getAllBlogs(){
  const results=await client
  .fetch(`*[_type =="contact"]{${blogFields}}`);
  return results;
}

// export async function getBlogBySlug(slug){

//   const results=await client

//   .fetch( `*[_type == "blog" && slug.current ==  $slug]
//   {
//      ${blogFields}
//      content[]{...,'asset':asset-> }
//     }`
//      ,{slug})
//      .then(res=>res?.[0])
//      return results;
// }