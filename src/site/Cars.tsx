import React from 'react';

export const Cars = () => {
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
                {topCars.map((elem, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{elem.manufacturer}</td>
                        <td>{elem.model}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};