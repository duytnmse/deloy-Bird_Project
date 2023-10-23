import { Router } from "@/node_modules/next/router";
import React from "react";
import BirdChild from "../BirdFamilyTree/BirdChild";
import MainGeneration from "../BirdFamilyTree/MainGeneration";
import Parent from "../BirdFamilyTree/Parent";
import NotificationCard from "../CageId/NotificationCard";

type BirdType = {
  id?: string;
  bird_type?: string;
  isMale?: string;
  hatch_date?: string;
  father_id?: string;
  mother_id?: string;
  cageid?: string;
  isAlive?: boolean;
  ageRange?: string;
  mutationRate?: number;
  mutation?: string;
  weight?: number;
  featherColor?: string;
  image?: string;
};

const Profile = ({
  id,
  bird_type,
  isMale,
  hatch_date,
  father_id,
  mother_id,
  cageid,
  isAlive,
  ageRange,
  mutationRate,
  mutation,
  weight,
  featherColor,
  image,
}: BirdType) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title ">Thông tin</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <form>
            <div className="row">
              <div className="image col-xl-4">
                <div className="form-group row widget-3">
                  <div className="form-input">
                    <label className="labeltest" htmlFor="file-ip-1">
                      <span> ... </span>
                    </label>
                    <input
                      type="file"
                      id="file-ip-1"
                      accept="image/*"
                    // ?\\onchange="showPreview(event);"
                    />
                    <div className="preview">
                      <img id="file-ip-1-preview" src="#" alt="img" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 ">
                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">ID:</label>
                  <div className="grow pl-2.5">{id}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Bird Type:</label>
                  <div className="grow pl-2.5">{bird_type}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Sex:</label>
                  <div className="grow pl-2.5">{isMale}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Hatch Date:</label>
                  <div className="grow pl-2.5">{hatch_date}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Father Id:</label>
                  <div className="grow pl-2.5">{father_id}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Mother Id:</label>
                  <div className="grow pl-2.5">{mother_id}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Cage Id:</label>
                  <div className="grow pl-2.5">{cageid}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Alive:</label>
                  {isAlive ? (
                    <div className="grow pl-2.5">Còn sống</div>
                  ) : (
                    <div className="grow pl-2.5">Đã chết</div>
                  )}
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Age Range:</label>
                  <div className="grow pl-2.5">{ageRange}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Mutation(%):</label>
                  <div className="grow pl-2.5">{mutationRate}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Mutation Note:</label>
                  <div className="grow pl-2.5">{mutation}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Weight(g):</label>
                  <div className="grow pl-2.5">{weight}</div>
                </div>

                <div className="flex justify-between items-center mb-2.5">
                  <label className="basis-[30%]">Feather Color:</label>
                  <div className="grow pl-2.5">{featherColor}</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>

      </div>
      <div className="card-footer">
        <h3 className="card-title text-[red]">
          Sơ đồ phả hệ ( Family Tree )
        </h3>
        <div className="flex align-baseline">
          <div className="border-t-dashed border-3 border-black w-[30%] h-[125px] justify-content-center align-items-center rounded-[15px] bg-blue-300 ">
            <div className="flex justify-content-center align-items-center mt-[9%] justify-evenly">
              <div className="fas fa-venus text-center "></div>
              <div>
                <div className="text-center break-words ">3 </div>
                <div className="text-center break-words">01/02/2023</div>
              </div>
            </div>
          </div>
          {/* className="flex border-t-dashed border-[3px] border-black w-[25%] */}
          <hr
            style={{
              display: "flex",
              borderTop: "3px dashed black",
              margin: "0 10px",
              width: "20%",
              marginTop: "9%"
            }}
          />
          <div className="border-t-dashed border-3 border-black w-[30%] h-[125px] justify-content-center align-items-center rounded-[15px] bg-pink-200 ">
            <div className="flex justify-content-center align-items-center mt-[9%] justify-evenly">
              <div className="fas fa-mars text-center "></div>
              <div>
                {/* //onClick={() => Router.push(`/bird/${ID}`)} */}
                <div className="text-center break-words" >2 </div>
                <div className="text-center break-words">15/05/2023</div>
              </div>
            </div>


          </div>
        </div>

        <div>
          <div
            style={{
              borderLeft: "1px solid black",
              height: "15vh",
              marginLeft: "41%",
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="border-t-dashed border-3 border-black w-[30%] h-[125px] justify-content-center align-items-center ml-[26%] mt-[1%] rounded-[15px] bg-yellow-200">
              <div className="text-center break-words mt-[15%]">1 </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* <div className="col-md-6 col-lg-4">
          <Parent />
        </div>
        <div className="col-md-6 col-lg-4">
          <MainGeneration />
        </div>
        <div className="col-md-6 col-lg-4">
          <BirdChild />
        </div> */}

        <div className="col-md-6 col-lg-4">
          <NotificationCard />
        </div>

      </div>
    </div >
  );
};

export default Profile;
