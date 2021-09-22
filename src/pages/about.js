import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';

export default function About({ data }) {
  console.log('data--->', JSON.stringify(data));
  const blog = data.allContentstackBlog.edges;
  console.log('blog--->', blog);
  return (
    <Layout>
      <h1>Replica of index</h1>
      <div style={{width:'500px', height:'100px', background: 'yellow'}}>
        {blog.map((el, i) => {
          const { node } = el;
          return (
            <div key={i}>
              <p>{node.owner.author_name}</p>
              {node.authors.map((author, i1) => (
                <div key={i1}>
                  <span>{author.first_name}</span>
                  <span>{author.last_name}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`{
  allContentstackBlog {
    edges {
      node {
        owner {
          author_name
          birth_place
          online_references {
            links {
              title
            }
            pdf {
              title
            }
          }
        }
        authors {
          first_name
          last_name
        }
      }
    }
  }
}`;
