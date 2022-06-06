import React from "react";
import { Chart } from "react-charts";
import "./Boards.css";
import { FaHandsHelping } from 'react-icons/fa';

export default function Boards({ UrlData, CardData, data, axes }) {
  return (
    <>
      {/* left and right side */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-8 bg-white"
            style={{ border: "2px solid #EAE8E8" }}
          >
            <span className="fs-3 fw-bold">Vote Submitted</span> <span className="fs-4 fw-normal">By Date</span>
            <div
              style={{
                width: "800px",
                height: "300px",
              }}
            >
              <Chart data={data} axes={axes} />
            </div>
            <ul class="list-group">
              <h4>Voting URLs</h4>
              <hr />

              <form>
                {UrlData.map((url) => (
                  <fieldset disabled key={url.id}>
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label">
                        {url.name}
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        class="form-control"
                        placeholder={url.url}
                      />
                    </div>
                  </fieldset>
                ))}
              </form>
            </ul>
          </div>
          <div className="col-md-4 bg-white gap-5">
            {CardData.map((card) => (
              <div className="card mb-4">
                <div className="card-body" style={{ "backgroundColor": card.color }}>
                  <div className="row  align-items-center">
                    <div className="col">{card.icon}</div>
                    <div className="col">
                      <h3 className="text-white" style={{ "marginLeft": "70%" }}>{card.number}</h3>
                      <p className="fw-bolder fs-5 text-white" style={{ "marginLeft": card.margin }}>{card.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button className="position-absolute end-0 bg-warning border-1 rounded-3 btn-lg" style={{ "marginRight": "6%" }}><FaHandsHelping size={30} />  Help</button>
          </div>
        </div>
      </div>
    </>
  );
}
