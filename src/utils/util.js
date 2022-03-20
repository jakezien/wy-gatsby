export const getImageNodeByName = (props, name) => {
  let filteredResult = props.data.images.edges.filter((e) => { 
    return (e.node.name === name) 
  })
  console.log(filteredResult[0])
  return filteredResult[0]?.node?.childImageSharp?.gatsbyImageData
}