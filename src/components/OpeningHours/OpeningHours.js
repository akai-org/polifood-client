import React from 'react';
import "./OpeningHours.scss";

export default function OpeningHours (props) {
  return (
    <div>
      <h3>Godziny otwarcia</h3>
      <ol className="opening-hours-list">
        <li className="opening-hours-element">
          <div className="day-name">
            Pon - Pt
          </div>
          <div className="hours-interval">
            10:00 - 22:00
          </div>
        </li>

        <li className="opening-hours-element">
          <div className="day-name">
            Sobota
          </div>
          <div className="hours-interval">
            10:00 - 24:00
          </div>
        </li>

        <li className="opening-hours-element">
          <div className="day-name">
            Niedziela
          </div>
          <div className="hours-interval">
            12:00 - 24:00
          </div>
        </li>
      </ol>

      <div class="closing-soon-info">
        Dzisiaj wkrótce zamknięcie
      </div>
    </div>
  );
}