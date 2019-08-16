
import {restful} from '~/service/restful'
import INIT_DATA from '~/service/INIT_DATA'
/**
 *  项目列表
 * */
const getProjectList = function () {
  let Default = {
    mpid: INIT_DATA.query && INIT_DATA.query.mpid
  }
  return restful('/task/mProjectList', Object.assign({}, Default), {
    msg: '获取项目列表失败'
  })
}
/**
 * 获取项目具体信息
 *
 * */
const getMonitorDetailList = function (options) {
  let Default = {}
  return restful('/task/monitorList', Object.assign({}, Default, options), {
    msg: '获取项目具体信息失败'
  })
}

/**
 * 创建监控项目
 * /task/bulidMonitor
 * */
const buildMonitor = function (options) {
  return restful('/task/bulidMonitor', options, {
    msg: '创建监控项目失败'
  })
}

export default {
  getProjectList,
  getMonitorDetailList,
  buildMonitor
}
