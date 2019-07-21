import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


const Graph = (props) => {

    
    const d3Container = useRef(null);
       /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
       
       const w = 500;
       const h = 400;

       useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current);
                const scale = d3.scaleLinear();
                const output = scale(50);

            scale.domain([0,50]);
            scale.range([5,50])

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('text')
                    .data(props.data);


                    update.enter()
                    .append('rect')
                    .attr('x', (d,i)=> i*30)
                    .attr('y', (d,i)=> h - i* 30)
                    .attr("height", (d,i) => 3*d)
                    .attr('width', 5);


                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 30)
                    .attr('y', (d,i)=> h - i*33 )
                    .style('font-size', 12)
                    .text((d) => d);



                // // Update existing D3 elements
                // update
                //     .attr('x', (d, i) => i * 40)
                //     .text((d: number) => d);

                // // Remove old D3 elements
                // update.exit()
                //     .remove();
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data])



    return (
     
        <svg
            className="d3-component"
            width={w}
            height={h}
            ref={d3Container}
        />

    )
}


export default Graph;

