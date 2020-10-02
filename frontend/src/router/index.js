import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import CampaignPlanning from '@/components/CampaignPlanning'
import CampaignPlanningEdit from '@/components/CampaignPlanningEdit'
import ExistingSamples from '@/components/ExistingSamples'
import ExistingSamplesEdit from '@/components/ExistingSamplesEdit'
import qs from 'qs';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/planning',
    name: 'planning',
    component: CampaignPlanning
  },
  {
    path: '/planning_edit',
    name: 'planning_edit',
    component: CampaignPlanningEdit
  },
  {
    path: '/existing',
    name: 'existing',
    component: ExistingSamples
  },
  {
    path: '/existing_edit',
    name: 'existing_edit',
    component: ExistingSamplesEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  stringifyQuery: query => {
    var result = qs.stringify(query);
    // Do not encode asterisks
    result = result.replace(/%2A/g, '*').replace(/%2F/g, '/').replace(/%21/g, '!').replace(/%2C/g, ',');
    return result ? ('?' + result) : '';
  },
  routes
})

export default router