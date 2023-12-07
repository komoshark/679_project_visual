import React, { useState } from 'react';
import './GptPricing.css'; // make sure to create this CSS file

const MultiplyInputs = () => {

}

const GptPricing = () => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [xTile, setXTile] = useState('');
    const [yTile, setYTile] = useState('');
    const [product, setProduct] = useState('');
  
    const handleXChange = (event) => {
      const newX = event.target.value;
      setX(newX);
      const tile = Math.ceil(newX * 1.0 / 550.0);
      setXTile(tile);
      const price = tile * yTile * 170 + 85;
      setProduct(price*0.00001);
    };
  
    const handleYChange = (event) => {
      const newY = event.target.value;
      setY(newY);
      const tile = Math.ceil(newY * 1.0 / 550.0);
      setYTile(tile);
      const price = xTile * tile * 170 + 85;
      setProduct(price*0.00001);
    };

    return (
        <container>
            <h2>GPT-4 Turbo</h2>
            <table className='price-table'>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Input</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gpt-4-i106-preview</td>
                        <td>$0.01 / 1K tokens</td>
                        <td>$0.03 / 1K tokens</td>
                    </tr>
                    <tr>
                        <td>gpt-4-i106-vision-preview</td>
                        <td>$0.01 / 1K tokens</td>
                        <td>$0.03 / 1K tokens</td>
                    </tr>
                </tbody>
            </table>
            <tr></tr>
            <p>This calculator is specifically designed for calculating the prices of images, 'px' stands for 'pixel'. Only applied to GPT4 which is a multimodal model.</p>
            <input type='number' value={x} onChange={handleXChange} ></input> <span> px  X  </span> <span></span>
            <input type='number' value={y} onChange={handleYChange} ></input> <span> px </span>
            <span> = $ {product}</span>
            <p></p>
            <tr></tr>
            <h2>GPT-4</h2>
            <table className='price-table'>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Input</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gpt-4</td>
                        <td>$0.03 / 1K tokens</td>
                        <td>$0.06 / 1K tokens</td>
                    </tr>
                    <tr>
                        <td>gpt-4-32k</td>
                        <td>$0.06 / 1K tokens</td>
                        <td>$0.12 / 1K tokens</td>
                    </tr>
                </tbody>
            </table>
            <tr></tr>
            <h2>GPT-3.5 Turbo</h2>
            <table className="price-table">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Input</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gpt-3.5-turbo-i106</td>
                        <td>$0.0010 / 1K tokens</td>
                        <td>$0.0020 / 1K tokens</td>
                    </tr>
                    <tr>
                        <td>gpt-3.5-turbo-instruct</td>
                        <td>$0.0015 / 1K tokens</td>
                        <td>$0.0020 / 1K tokens</td>
                    </tr>
                </tbody>
            </table>
            <tr></tr>
            <h2>Fine Tuning</h2>
            <table className='price-table'>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Training</th>
                        <th>Input usage</th>
                        <th>Output usage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gpt-3.5-turbo</td>
                        <td>$0.0080 / 1K tokens</td>
                        <td>$0.0030 / 1K tokens</td>
                        <td>$0.0060 / 1K tokens</td>
                    </tr>
                    <tr>
                        <td>davinci-002</td>
                        <td>$0.0060 / 1K tokens</td>
                        <td>$0.0120 / 1K tokens</td>
                        <td>$0.0120 / 1K tokens</td>
                    </tr>
                    <tr>
                        <td>babbage-002</td>
                        <td>$0.0040 / 1K tokens</td>
                        <td>$0.0016 / 1K tokens</td>
                        <td>$0.0016 / 1K tokens</td>
                    </tr>
                </tbody>
            </table>
        </container>
    );
};

export default GptPricing;
