<template>
    <div class="d-flex flex-column  bg-secblue100" style="padding:25px 50px">
        <div class="d-flex flex-nowrap justify-content-between mb-4">
            <div class="d-flex ft-grey700 f-24">
                <i class="icon-51 mr-4"></i>
                <i class="icon-23 mr-4"></i>
                <i class="icon-46 mr-4"></i>
            </div>

            <div class="ft-grey700 f-18">
                <i class="icon-68 mr-4"></i>
                <i class="icon-21 mr-4"></i>
            </div>

        </div>
        <div class="d-flex align-items-center">
            <div class="ft-accentblue900" style="line-height: 23px;">
                <div class="h1 f-b">Ecommerce Dashboard</div>
                Here’s what’s going on at your business right now
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-xl-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <p class="text-truncate font-size-14 mb-2">Total Sales</p>
                                        <h4 class="mb-2">1452</h4>
                                    </div>
                                    <div class="col">
                                        <chart-line :height="60" :width="180" :chartLabels="chartLabels"   :datasets="cartData" :cartOptions="cartOptions" />
                                    </div>
                                </div>
                                <!--   <mixed-chart height="250" width="100%" />-->

                                <p class="text-muted mb-0"><span class=" pr-2 f-14 ft-secgreen900">

<svg width="12" height="12" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M108.845 83.486L108.845 10.6562C108.845 4.96819 104.235 0.357983 98.547 0.357984L25.7172 0.357987C20.0292 0.357987 15.419 4.96819 15.419 10.6562C15.419 16.3442 20.0292 20.9544 25.7172 20.9544L73.683 20.9544L3.8684 90.769C-0.155399 94.7928 -0.155399 101.311 3.8684 105.335C7.8922 109.359 14.4106 109.359 18.4346 105.335L88.2492 35.5206L88.2492 83.4864C88.249 86.3268 89.4 88.905 91.2644 90.7694C93.1288 92.6338 95.7034 93.7882 98.5474 93.7846C104.235 93.7846 108.846 89.1744 108.846 83.4864L108.845 83.486Z" fill="#488492"/>
</svg>


                                        9.23%</span>from previous period
                                </p>
                            </div>
                            <div class="avatar-sm">
                                                <span class="avatar-title bg-light text-primary rounded-3">
                                                    <i class="ri-shopping-cart-2-line font-size-24"></i>
                                                </span>
                            </div>
                        </div>
                    </div><!-- end cardbody -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <p class="text-truncate font-size-14 mb-2">New Orders</p>
                                        <h4 class="mb-2">938</h4>
                                    </div>
                                    <div class="col">
                                        <mixed-chart :height="60" :width="180"  :datasets="orderChartData" />
                                    </div>
                                </div>


                                <p class="text-muted mb-0"><span class="text-danger fw-bold font-size-12 mr-2"  style="color: #e83e8c">

                                        <svg t="1669011484905" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="90999" width="20" height="20"><path d="M362.57 764.226h364.149c28.44 0 51.491-23.051 51.491-51.491v-364.149c0-28.44-23.051-51.491-51.491-51.491s-51.491 23.051-51.491 51.491v239.829l-349.073-349.073c-20.119-20.119-52.711-20.119-72.831 0s-20.119 52.711 0 72.831l349.073 349.073h-239.829c-14.202-0.001-27.093 5.754-36.415 15.076s-15.094 22.195-15.076 36.415c0 28.44 23.051 51.491 51.491 51.491z" p-id="91000" fill="#e83e8c"></path></svg>

                                        1.09%</span>from previous period
                                </p>
                            </div>
                            <div class="avatar-sm">
                                                <span class="avatar-title bg-light text-success rounded-3">
                                                    <i class="mdi mdi-currency-usd font-size-24"></i>
                                                </span>
                            </div>
                        </div>
                    </div><!-- end cardbody -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <p class="text-truncate font-size-14 mb-2">New Orders</p>
                                        <h4 class="mb-2">938</h4>
                                    </div>
                                    <div class="col">
                                        <chart-line :height="65" :width="180" :chartLabels="chartLabels"   :datasets="cartData" :cartOptions="cartOptions" optionsName="usersLine" />

                                    </div>
                                </div>
                                <p class="text-muted mb-0"><span class=" pr-2 f-14 ft-secgreen900">

<svg width="12" height="12" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M108.845 83.486L108.845 10.6562C108.845 4.96819 104.235 0.357983 98.547 0.357984L25.7172 0.357987C20.0292 0.357987 15.419 4.96819 15.419 10.6562C15.419 16.3442 20.0292 20.9544 25.7172 20.9544L73.683 20.9544L3.8684 90.769C-0.155399 94.7928 -0.155399 101.311 3.8684 105.335C7.8922 109.359 14.4106 109.359 18.4346 105.335L88.2492 35.5206L88.2492 83.4864C88.249 86.3268 89.4 88.905 91.2644 90.7694C93.1288 92.6338 95.7034 93.7882 98.5474 93.7846C104.235 93.7846 108.846 89.1744 108.846 83.4864L108.845 83.486Z" fill="#488492"/>
</svg>

                                        16.2%</span>from previous period
                                </p>
                            </div>
                            <div class="avatar-sm">
                                                <span class="avatar-title bg-light text-primary rounded-3">
                                                    <i class="ri-user-3-line font-size-24"></i>
                                                </span>
                            </div>
                        </div>
                    </div><!-- end cardbody -->
                </div><!-- end card -->
            </div><!-- end col -->
            <div class="col-xl-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col">
                                        <p class="text-truncate font-size-14 mb-2">Unique Visitors</p>
                                        <h4 class="mb-2">29670</h4>
                                    </div>
                                    <div class=" d-flex justify-content-center align-items-center bg-accentblue500 mr-4 "  style="width: 50px; height: 50px; border-radius: 100%; border: 5px solid #D3E2E5; ">
                                        <i class="icon-26 f-32 ft-accentblue900"></i>
                                    </div>
                                </div>
                                <p class="text-muted mb-0"><span class=" f-14 ft-secgreen900"> </span>total
                                </p>
                            </div>
                            <div class="avatar-sm">
                                                <span class="avatar-title bg-light text-success rounded-3">
                                                    <i class="mdi mdi-currency-btc font-size-24"></i>
                                                </span>
                            </div>
                        </div>
                    </div><!-- end cardbody -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div>

        <div class="card mt-5">

            <!-- header -->
            <div class="card-header flex flex-row justify-between">
                <div class="h3">Sales Overview</div>

                <div class="flex flex-row justify-center items-center">

                    <a href="">
                        <i class="fad fa-chevron-double-down mr-6"></i>
                    </a>

                    <a href="">
                        <i class="fad fa-ellipsis-v"></i>
                    </a>

                </div>

            </div>
            <!-- end header -->

            <!-- body -->
            <div class="card-body grid grid-cols-2 gap-6 lg:grid-cols-1 p-0 ">



                <div class="car d-flex mt-4 justify-content-between ">
                    <div class="col-9 pt-4 pl-4 pr-4 pb-2" style="border-right: 1px solid #E0DDDD;">
                        <div class="row">
                            <div class="mr-2 pl-4">
                                <span class="f-24 f-b">$4,197.22</span>
                                <div class=" mb-1" style="width: 140px;">
                                    <default-select-triangle
                                            color="#969696"
                                            name="reditCardCountry"
                                            v-model="service.business"
                                            :selectdata="['businessVerify','business','type','Status']"
                                            placeholder="Carrier name"
                                            key="name04"

                                    />
                                </div>

                            </div>
                            <div class="col-7">
                                <span class="f-24 f-b" style="color:#969696">$4,197.22</span>
                                <div class=" mb-1"  >
                                    <base-date-picker  v-model="service.month" @emitChoose="onSelectChartDate"/>
                                </div>
                            </div>
                        </div>
                        <chart-line :height="90" :chartLabels="chartLabels"   :datasets="cartData" :cartOptions="cartOptions"  optionsName="defaultChartLine" />
                    </div>
                    <div class="col-3 d-flex flex-column">
                        <div class="row p-4  po-r" style="flex:1">
                            <div class="col-6">
                                <div class=" mb-2" style="width: 140px;">
                                    <default-select-triangle
                                            color="#969696"
                                            name="reditCardCountry"
                                            v-model="service.business"
                                            :selectdata="['businessVerify','business','type','Status']"
                                            placeholder="Carrier name"
                                            key="name04"

                                    />
                                </div>
                                <span class="f-24 f-b">$4,197.22</span>
                                <div class="mt-1"><span class="f-10 ft-grey500">Available to Payout</span></div>
                            </div>
                            <pie-chart :height="130" :width="158"/>
                        </div>
                        <div class="row p-4 br-t-1 br-grey300 po-r " style="flex:1">
                            <div class="col-6">
                                <div class=" mb-2 ft-grey500" style="width: 140px;">
                                    Payouts
                                </div>
                                <span class="f-24 f-b">$5,197.51</span>
                                <div class="mt-1 "><span class="f-10 ft-grey500">Expected Today</span></div>
                            </div>
                            <mixed-chart :height="130" :width="158"  :datasets="availablechartData" />
                        </div>
                    </div>
                </div>

            </div>
            <!-- end body -->

        </div>

        <div class="card mt-5">

            <!-- header -->
            <div class="card-header flex flex-row justify-between">
                <div class="h3">Invoices</div>

                <div class="flex flex-row justify-center items-center">

                    <a href="">
                        <i class="fad fa-chevron-double-down mr-6"></i>
                    </a>

                    <a href="">
                        <i class="fad fa-ellipsis-v"></i>
                    </a>

                </div>

            </div>
            <!-- end header -->

            <!-- body -->
            <div class="card-body grid grid-cols-2 gap-6 lg:grid-cols-1 p-0  ">


                <table class="unis-info-table" style="border: none!important;" >
                    <thead>
                    <tr>
                        <th rowspan="2" class="pl-2 pr-2 br-r-c">Status</th>
                        <th rowspan="2" class="pl-2 pr-2 br-r-c">PRO #</th>
                        <th rowspan="2" class="pl-2 pr-2 br-r-c">Invoice #</th>
                        <th colspan="5" class="pl-2 pr-2 br-r-c" style="text-align: center">Carrier Invoiced</th>
                        <th rowspan="2" class="pl-2 pr-2 br-r-c">Ship Date</th>
                        <th rowspan="2" class="pl-2 pr-2 br-r-c t-center">POD</th>
                        <th rowspan="2" class="pl-2 pr-2">Dispute</th>
                    </tr>
                    <tr>
                        <th class="pl-2 pr-2 br-t-n" style="border-left: none;">Base</th>
                        <th class="pl-2 pr-2 br-t-n br-r-c">Acc.</th>
                        <th class="pl-2 pr-2 br-t-n br-r-c">FSC</th>
                        <th class="pl-2 pr-2 br-t-n br-r-c">Discount</th>
                        <th class="pl-2 pr-2 br-r-c">Total</th>
                    </tr>
                    </thead>
                    <tbody class="tbody-br-b-no">
                    <tr v-for="index in 5" :key="index">
                        <td class="pl-2 pr-2 br-r-c">
                            <status-colors bg="#D6FCE7" color="#268C55">Paid</status-colors>
                        </td>
                        <td class="pl-2 pr-2 br-r-c">
                            <button class="unis-btn unis-btn-link compact ">14211864</button>
                        </td>
                        <td class="pl-2 pr-2 br-r-c">
                            <button class="unis-btn unis-btn-link compact ">14211864</button>
                        </td>
                        <td class="pl-2 pr-2 br-r-c">121.30</td>
                        <td class="pl-2 pr-2 br-r-c">34.00</td>
                        <td class="pl-2 pr-2 br-r-c">30.63</td>
                        <td class="pl-2 pr-2 br-r-c">0.00%</td>
                        <td class="pl-2 pr-2 br-r-c">130.00</td>
                        <td class="pl-2 pr-2 br-r-c">08/18/22</td>
                        <td class="pl-2 pr-2 br-r-c">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class="icon-17 f-20 ft-oceanblue700 mr-2"/>
                                |
                                <i class="icon-43 f-20 ft-oceanblue700 ml-2"/>
                            </div>
                        </td>
                        <td class="pl-2 pr-2 br-r-c" style="border-right:none !important; ">
                            <button class="unis-btn compact unis-btn-text ">Click Here</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <!-- end body -->

        </div>
        <div class="" style="height: 80px;"></div>

      <!-- -->
    </div>
</template>
