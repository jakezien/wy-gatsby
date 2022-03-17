export const getImageNodeByName = (props, name) => {
  let filteredResult = props.data.images.edges.filter((e) => { 
    return (e.node.name === name) 
  })
  return filteredResult[0]?.node?.childImageSharp?.fluid
}