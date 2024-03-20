import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import SideBar from "./SideBar";

const CreateTag = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const selectOption = watch("selectOptionTrigger");

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <SideBar />
      <main className="flex justify-center p-4 h-screen py-20  ml-64">
        <div className="flex flex-col gap-y-5 px-10 py-10 h-min border-solid border-2 border-black-500 rounded-2xl w-[460px]">
          <p className="text-center text-2xl font-bold  ">Tag Configuration</p>

          <form
            className="flex flex-col gap-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="tagName" className="text-sm">
              Tag Name
            </label>
            <input
              className="border-2 rounded-md p-1 text-sm text-blue-900 placeholder:text-xs"
              type="text"
              name="tagName"
              id="tagName"
              placeholder="Enter tag name"
              {...register("tagName", {
                required: "Tag Name is required",
              })}
            />
            {errors.tagName && (
              <p className="text-red-500 text-xs">{errors.tagName.message}</p>
            )}

            <label htmlFor="selectOption" className="text-sm">
              Tag Type
            </label>
            <select
              className="border-2 rounded-md  py-2 px-1 text-xs text-blue-900 bg-white placeholder:text-xs"
              id="selectOption"
              {...register("selectOption", {
                required: "Please select an option",
              })}
            >
              <option value="Page View">Page View</option>
              <option value="Click">Click</option>
              <option value="Timing">Timing</option>
              <option value="Social">Social</option>
            </select>
            {errors.selectOption && (
              <p className="text-red-500 text-xs">
                {errors.selectOption.message}
              </p>
            )}

            <p className="text-center pt-10 pb-5 text-2xl font-bold ">
              Trigger Configuration
            </p>

            <label htmlFor="triggerName" className="text-sm">
              Trigger Name
            </label>
            <input
              className="border-2 rounded-md  p-1 text-sm text-blue-900 placeholder:text-xs"
              type="text"
              name="triggerName"
              id="triggerName"
              placeholder="Enter tag name"
              {...register("triggerName", {
                required: "Name is required",
              })}
            />
            {errors.triggerName && (
              <p className="text-red-500 text-xs">
                {errors.triggerName.message}
              </p>
            )}

            <label htmlFor="selectOptionTrigger" className="text-sm">
              Trigger Type
            </label>
            <select
              className="border-2 rounded-md  py-2 px-1 text-xs text-blue-900 bg-white placeholder:text-xs"
              id="selectOptionTrigger"
              {...register("selectOptionTrigger", {
                required: "Please select an option",
              })}
            >
              <option value="">Select an option</option>
              <option value="Page View">Page View</option>
              <option value="Click">Click</option>
              <option value="Timing">Timing</option>
              <option value="Social">Social</option>
            </select>
            {errors.selectOptionTrigger && (
              <p className="text-red-500 text-xs">
                {errors.selectOptionTrigger.message}
              </p>
            )}

            <div className="flex justify-between">
              {selectOption === "Page View" && (
                <>
                  <div className="flex w-1/3 flex-col">
                    <label htmlFor="selectOptionPage" className="text-sm">
                      Fire Condition
                    </label>
                    <select
                      className="border-2 rounded-md  py-2 px-1 text-xs text-blue-900 bg-white placeholder:text-xs"
                      id="selectOptionPage"
                      {...register("selectOptionPage")}
                    >
                      <option value="PageUrl">Page Url</option>
                      <option value="PagePath">Page Path</option>
                      <option value="PageHostname">Page Hostname</option>
                    </select>
                  </div>
                  <div className="flex w-3/5 flex-col">
                    <label htmlFor="value" className="text-sm">
                      Value
                    </label>
                    <input
                      className="border-2 rounded-md  p-1 text-sm text-blue-900 placeholder:text-xs"
                      type="text"
                      name="value"
                      id="value"
                      placeholder="Enter value"
                      {...register("value", {
                        required: "Name is required",
                      })}
                    />
                    {errors.value && (
                      <p className="text-red-500 text-xs">
                        {errors.value.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {selectOption === "Click" && (
                <>
                  <div className="flex w-1/3 flex-col">
                    <label htmlFor="selectOptionClick" className="text-sm">
                      Fire Condition
                    </label>
                    <select
                      className="border-2 rounded-md py-2 px-1 text-xs text-blue-900 bg-white placeholder:text-xs"
                      id="selectOptionTrigger"
                      {...register("selectOptionClick")}
                    >
                      <option value="Page View">ClickId</option>
                      <option value="Click">ClickText</option>
                      <option value="Click">ClickClassName</option>
                    </select>
                  </div>
                  <div className="flex w-3/5 flex-col">
                    <label htmlFor="value" className="text-sm">
                      Value
                    </label>
                    <input
                      className="border-2 rounded-md  p-1 text-sm text-blue-900 placeholder:text-xs"
                      type="text"
                      name="value"
                      id="value"
                      placeholder="Enter value"
                      {...register("value", {
                        required: "Name is required",
                      })}
                    />
                    {errors.value && (
                      <p className="text-red-500 text-xs">
                        {errors.value.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>

            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 my-3 text-sm font-semibold  text-white hover:bg-indigo-800 hover:cursor-pointer
                "
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateTag;
