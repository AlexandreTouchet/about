import React from "react";

export const Competence = () => {

    return (
        <div>
            <div className="flex">
                <div class="orange m-15">
                    <div class="progress">
                        <div class="inner">
                            <div class="percent"><span>85</span>%</div>
                            <div class="water"></div>
                            <div class="glare"></div>
                        </div>
                    </div>
                    <li className="comp-desc">HTML</li>
                </div>
                <div class="blue m-15">
                    <div class="progress">
                        <div class="inner">
                            <div class="percent"><span>70</span>%</div>
                            <div class="water"></div>
                            <div class="glare"></div>
                        </div>
                    </div>
                    <li className="comp-desc">CSS</li>
                </div>
                <div class="green m-15">
                    <div class="progress">
                        <div class="inner">
                            <div class="percent"><span>30</span>%</div>
                            <div class="water"></div>
                            <div class="glare"></div>
                        </div>
                    </div>
                    <li className="comp-desc">JS / JSX</li>
                </div>
                <div class="purple m-15">
                    <div class="progress">
                        <div class="inner">
                            <div class="percent"><span>72</span>%</div>
                            <div class="water"></div>
                            <div class="glare"></div>
                        </div>
                    </div>
                    <li className="comp-desc">PHP</li>
                </div>
                <div class="red m-15">
                    <div class="progress">
                        <div class="inner">
                            <div class="percent"><span>80</span>%</div>
                            <div class="water"></div>
                            <div class="glare"></div>
                        </div>
                    </div>
                    <li className="comp-desc">SQL</li>
                </div>
            </div>
        </div>
    )
}